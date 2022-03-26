data = [ 
    ["imgPost1", "imgAuthor", "nameAuthor", "text"], 
    ["imgPost2", "imgAuthor2", "nameAuthor", "text"], 
    ["imgPost3", "imgAuthor2", "nameAuthor", "text"], 
    ["imgPost4", "imgAuthor", "nameAuthor", "text"], 
]

class Post{
    constructor(photoLink, avatarLink, authorName, description){
        this.photoLink = photoLink;
        this.avatarLink = avatarLink;
        this.authorName = authorName;
        this.description = description;
    }
}


var post1 = new Post(data[0][0] , data[0][1], data[0][2] , data[0][3])
var post2 = new Post(data[1][0] , data[1][1], data[1][2] , data[1][3])
var post3 = new Post(data[2][0] , data[2][1], data[2][2] , data[2][3])
var post = new Post(data[3][0] , data[3][1], data[3][2] , data[3][3])
