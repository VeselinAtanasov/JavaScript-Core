function result() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let result = "";
            result += `Post: ${this.title}\n`;
            result += `Content: ${this.content}\n`;
            return result;
        }
    }
    class SocialMediaPost extends Post {

        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let diff = this.likes - this.dislikes;
            let result = super.toString();
            result += `Rating: ${diff}\n`;
            if (this.comments.length !== 0) {
                result += "Comments:\n";
                for (let comment of this.comments) {
                    result += ` * ${comment}\n`
                }
            }

            return result.trim();
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let result = super.toString();
            result += `Views: ${this.views}\n`;
            return result.trim();
        }
    }
    return {BlogPost, Post, SocialMediaPost}
}

let classes = result();

let test = new classes.BlogPost("TestTitle", "TestContent", 5);

test.view().view().view();
console.log(test.toString())

// expect(test.toString()).to.be.equal(
//     "Post: TestTitle\n" +
//     "Content: TestContent\n" +
//     "Views: 8",
//     "'BlogPost views()' function does not work properly");
