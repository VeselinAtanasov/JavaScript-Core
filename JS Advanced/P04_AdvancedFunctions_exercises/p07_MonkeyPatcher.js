function solution(command) {
//console.log(this)
    switch (command) {
        case 'upvote':
            return this.upvotes++;
        case 'downvote':
            return this.downvotes++;
        case 'score':
            return calculateScore(this);
    }
    function calculateScore(param) {
        // console.log(param)
        let result = {
            upvotes: param.upvotes,
            downvotes: param.downvotes

        };
        result['raiting'] = "new";
        let totalVotes = param.upvotes - param.downvotes;
        if (param.upvotes + param.downvotes >= 10) {
            if ((100 * param.upvotes) / (param.upvotes + param.downvotes) > 66) {
                result['raiting'] = "hot"
            } else if (param.upvotes > 100 || param.downvotes > 100) {
                result['raiting'] = "controversial";
            } else if (totalVotes < 0) {
                result['raiting'] = "unpopular";
            }
        }
        if (param.upvotes + param.downvotes > 50) {
            result['upvotes'] = Math.ceil(Math.max(param.upvotes, param.downvotes) * 0.25 + param.upvotes);
            result['downvotes'] = Math.ceil(Math.max(param.upvotes, param.downvotes) * 0.25 + param.downvotes);
            totalVotes = result['upvotes'] - result['downvotes'];
        }
        return [result['upvotes'], result['downvotes'], totalVotes, result['raiting']];
    }
}
let post = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};

let answer = solution.call(post, 'score');
console.log(answer)
solution.call(post, 'downvote');
answer = solution.call(post, 'score');
console.log(answer)
solution.call(post, 'upvote');
solution.call(post, 'upvote');
answer = solution.call(post, 'score');
console.log(answer)
for (let i = 0; i < 38; i++) {
    solution.call(post, 'upvote');
}

answer = solution.call(post, 'score');
console.log(answer);

solution.call(post, 'downvote');
answer = solution.call(post, 'score');
console.log(answer);


