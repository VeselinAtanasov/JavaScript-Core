$(() => {
    //Main Script - holds Routers and Sammy initialization:
    const app = Sammy('#container', function () {
        //Allow Handlebars in Sammy:
        this.use('Handlebars', 'hbs');

        //home/login/register
        this.get('index.html', getWelcomePage);
        this.get('#/home', getWelcomePage);

        function getWelcomePage(ctx) {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    header: './templates/common/header.hbs',
                    loginForm: './templates/forms/loginForm.hbs',
                    registerForm: './templates/forms/registerForm.hbs'
                }).then(function () {
                    this.partial('./templates/welcome-anonymous.hbs');
                })
            } else {
                ctx.redirect('#/catalog');
            }
        }

        function calcTime(dateIsoFormat) {
            let diff = new Date - (new Date(dateIsoFormat));
            diff = Math.floor(diff / 60000);
            if (diff < 1) return 'less than a minute';
            if (diff < 60) return diff + ' minute' + pluralize(diff);
            diff = Math.floor(diff / 60);
            if (diff < 24) return diff + ' hour' + pluralize(diff);
            diff = Math.floor(diff / 24);
            if (diff < 30) return diff + ' day' + pluralize(diff);
            diff = Math.floor(diff / 30);
            if (diff < 12) return diff + ' month' + pluralize(diff);
            diff = Math.floor(diff / 12);
            return diff + ' year' + pluralize(diff);
            function pluralize(value) {
                if (value !== 1) return 's';
                else return '';
            }
        }

        //Register User:
        this.post('#/register', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let passwordRep = ctx.params.repeatPass;

            if (!/^[A-Za-z]{3,}$/.test(username)) {
                notify.showError('User name should be at least 3 chars - please try again!')
            } else if (!/^[A-Za-z\d]{6,}$/.test(password)) {
                notify.showError('Password should be at least 6 symbols - please try again!')
            } else if (password !== passwordRep) {
                notify.showError('Both password should match!')
            } else {
                auth.register(username, password)
                    .then(function (userData) {
                        notify.showInfo('Successful Registration!');
                        auth.saveSession(userData);
                        ctx.redirect('#/catalog')
                    }).catch(function (err) {
                    notify.handleError(err)
                })
            }
        });

        //Sign in user 
        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;

            if (!/^[A-Za-z]{3,}$/.test(username)) {
                notify.showError('User name should be at least 3 chars - please try again!')
            } else if (!/^[A-Za-z\d]{6,}$/.test(password)) {
                notify.showError('Password should be at least 6 symbols - please try again!')
            } else {
                auth.login(username, password)
                    .then(function (userData) {
                        notify.showInfo('Login successful.');
                        auth.saveSession(userData);
                        ctx.redirect('#/catalog')
                    }).catch(function (err) {
                    notify.handleError(err);
                })
            }
        });

        //Logout user:
        this.get('#/logout', function (ctx) {
            auth.logout()
                .then(function (info) {
                    notify.showInfo('Logout successful.')
                    sessionStorage.clear();
                    ctx.redirect('#/home')
                }).catch(notify.handleError)
        });

        //Display Catalog:
        this.get('#/catalog', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('index.html');
                return;
            }

            posts.getAllPosts()
                .then(function (posts) {
                    posts.forEach((post, index) => {
                        post.rank = index + 1;
                        post.date = calcTime(post._kmd.ect);
                        post.isAuthor = post._acl.creator === sessionStorage.getItem('userId')

                    });
                    ctx.isAuthentic = auth.isAuth();
                    ctx.articles = posts;
                    ctx.username = sessionStorage.getItem('username');

                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        header: './templates/common/header.hbs',
                        navigation: './templates/common/navigation.hbs',
                        article: './templates/posts/article.hbs',
                        postList: './templates/posts/postList.hbs'
                    }).then(function () {
                        this.partial('./templates/posts/catalogPage.hbs')
                    })

                }).catch(notify.handleError)


        });

        //Display create post
        this.get('#/create/post', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('index.html');
                return;
            }


            ctx.isAuthentic = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            ctx.loadPartials({
                footer: './templates/common/footer.hbs',
                header: './templates/common/header.hbs',
                navigation: './templates/common/navigation.hbs',
            }).then(function () {
                this.partial('./templates/posts/createPostPage.hbs')
            })
        });

        //Create Post
        this.post('#/create/post', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('index.html');
                return;
            }

            let url = ctx.params.url;
            let title = ctx.params.title;
            let imageUrl = ctx.params.imageUrl;
            let description = ctx.params.description;


            if (!/^http/.test(url)) {
                notify.showError("The link should start with http")
            } else if (url === '' || title === '') {
                notify.showError('URL and Title are mandatory!')
            } else {
                posts.createPost(sessionStorage.getItem('username'), title, description, url, imageUrl)
                    .then(function (responseInfo) {
                        notify.showInfo("Post created.");
                        ctx.redirect('#/catalog');
                    }).catch(notify.handleError)
            }
        });

        //Display Edit :
        this.get('#/edit/post/:postId', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('index.html');
                return;
            }
            let postId = ctx.params.postId;
            posts.getPostById(postId)
                .then(function (postInfo) {
                    ctx.isAuthentic = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.post = postInfo;
                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        header: './templates/common/header.hbs',
                        navigation: './templates/common/navigation.hbs',
                    }).then(function () {
                        this.partial('.//templates/posts/editPostPage.hbs')
                    })
                }).catch(notify.handleError)

        });
        // Edit the post:
        this.post('#/edit/post/:postId', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('index.html');
                return;
            }
            let postId = ctx.params.postId;
            let url = ctx.params.url;
            let title = ctx.params.title;
            let imageUrl = ctx.params.imageUrl;
            let description = ctx.params.description;

            if (!/^http/.test(url)) {
                notify.showError("The link should start with http")
            } else if (url === '' || title === '') {
                notify.showError('URL and Title are mandatory!')
            } else {
                posts.editPost(postId, sessionStorage.getItem('username'), title, description, url, imageUrl)
                    .then(function (responseInfo) {
                        notify.showInfo(`Post ${title} updated`);
                        ctx.redirect('#/catalog');
                    }).catch(notify.handleError)
            }
        });

        //Delete post with get !!!
        this.get('#/delete/post/:postId', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('index.html');
                return;
            }
            let id = ctx.params.postId;
            posts.deletePost(id)
                .then(function () {
                    notify.showInfo('Post deleted!');
                    ctx.redirect('#/catalog');
                }).catch(notify.handleError)
        });

        this.get('#/posts', function (ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('index.html');
                return;
            }
            posts.getMyPosts(sessionStorage.getItem('username'))
                .then(function (posts) {
                    notify.showInfo("Own posts loaded!")
                    posts.forEach((p, i) => {
                        p.rank = i + 1;
                        p.date = calcTime(p._kmd.ect);
                        p.isAuthor = p._acl.creator === sessionStorage.getItem('userId');
                    });
                    ctx.isAuthentic = auth.isAuth();
                    ctx.articles = posts;
                    ctx.username = sessionStorage.getItem('username');

                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        header: './templates/common/header.hbs',
                        navigation: './templates/common/navigation.hbs',
                        article: './templates/posts/article.hbs'
                    }).then(function () {
                        this.partial('./templates/posts/myPosts.hbs')
                    })

                }).catch(notify.handleError)
        });

        // COMMENTS:

        this.get('#/details/:postId', function (ctx) {
            let postId = ctx.params.postId;
            const postPromise = posts.getPostById(postId);
            const commentPromise = comments.getAllComments(postId);

            Promise.all([postPromise, commentPromise])
                .then(([post, comments]) => {
                    post.date = calcTime(post._kmd.ect);
                    post.isAuthor = post._acl.creator === sessionStorage.getItem('userId');
                    post.username = sessionStorage.getItem('username');
                    comments.forEach((c, i) => {
                        c.date = calcTime(c._kmd.ect);
                        c.commentAuthor = c._acl.creator === sessionStorage.getItem('userId');


                    });

                    ctx.isAuthentic = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.post = post;
                    ctx.comments = comments;

                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        header: './templates/common/header.hbs',
                        navigation: './templates/common/navigation.hbs',
                        postDetails: './templates/comments/postDetails.hbs',
                        commentArticle: './templates/comments/commentArticle.hbs'
                    }).then(function () {
                        this.partial('./templates/comments/postDetailsPage.hbs')
                    })


                }).catch(notify.handleError)
        });

        //create comment:
        this.post('#/create/comment/:postId', function (ctx) {

            let postId = ctx.params.postId;
            let content = ctx.params.content;
            let author = sessionStorage.getItem('username');
            if (content === '') {
                notify.showError('Cannot add empty comment')
                return;
            }

            comments.createComment(postId, content, author)
                .then(function (commentInfo) {
                    notify.showInfo('Comment created.');
                    ctx.commentAuthor = sessionStorage.getItem('username')
                    ctx.redirect(`#/details/${postId}`)
                }).catch(notify.handleError)
        });

        this.get('#/comment/delete/:commentId', function (ctx) {
            let commentId = ctx.params.commentId;

            comments.getCommentById(commentId)
                .then(function (info) {
                    let postId = info.postId;
                    comments.deleteComment(commentId)
                        .then(function (info) {
                            console.log(info);
                            notify.showInfo("Comment deleted.");
                             ctx.redirect(`#/details/${postId}`)
                        })
                }).catch(notify.handleError)
        })

            //If the get query is not an option here is the way - using window.history.go(-1) will return us one page back
        // this.get('#/comment/delete/:commentId', function (ctx) {
        //     let commentId = ctx.params.commentId;
        //
        //             comments.deleteComment(commentId)
        //                 .then(function (info) {
        //                     console.log(info);
        //                     notify.showInfo("Comment deleted.");
        //                    // ctx.redirect(`#/details/${postId}`)
        //                     window.history.go(-1) // return one page back:)
        //                 }).catch(notify.handleError)
        //
        // })

    });

    app.run()

});