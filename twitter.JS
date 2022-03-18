var user1 = {
    tweetCounter: 17.1,
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 112,
    followerCount: 78.2,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    tweetCounter: '3,812',
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

const contentColumn = document.getElementById('content-column');

// Header //
const header = document.getElementById('header');
const headerContent = document.createElement('div');

headerContent.classList.add('header-content');

headerContent.innerHTML = `
<div id= "back-button">
        <i class= "fa-light fa-arrow-left fa">
        </i>
</div>
<div class= "flex-column">
    <div id= "twitter-title">
        <p class= "display-name">${user1.displayName}</p>

            <svg viewBox="0 0 24 24" aria-label="Verified account" class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr">
                <g>
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z">
                    </path>
                </g>
            </svg>

    </div>
    <div class= "sub-header">
        ${user1.tweetCounter + "K Tweets"}
    </div>
</div>
`;

header.appendChild(headerContent);

// Cover Photo //
 //onst coverPhoto = document.getElementById('cover-photo')

// document.coverPhoto.style.backgroundImage = `url(${user1.coverPhotoURL})`
 //coverPhoto.innerHTML = `
 //<img src= "${user1.coverPhotoURL}"/>

 //<div id= "profile-picture">
 //<img src = "${user1.avatarURL}"/>
 //</div>

 //`;.
//contentColumn.appendChild(coverPhoto)

// Profile Container

const profileContainer = document.getElementById('profile-container');
const profileDetail = document.createElement('div');
profileDetail.setAttribute('id','profile-detail');

profileDetail.innerHTML = `
<div id="sub-buttons">
    <button>
        ...
    </button>
    <button>
        Follow
    </button> 
</div>

<div id= "sub-bio">
    <div class= "flex-column">
        <div id= "twitter-title">
            <p class= "display-name">${user1.displayName}</p>

            <svg viewBox="0 0 24 24" aria-label="Verified account" class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr">
                <g>
                     <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z">
                     </path>
                </g>
            </svg>
        </div>
        
        <div class= "sub-header">
            ${user1.userName}
        </div>
        
        <div id= "joined-date">
            <i class="fa-duotone fa-calendar-days fa"> 
            </i> 
            ${" Joined " + user1.joinedDate}
        </div> 
        
        <div id= "social-counter">
            <p>${user1.followingCount}<span> Following</span></p>
            <p>${user1.followerCount + "M"}<span> Followers</span></p>
        </div>
    </div>
</div>

`;

profileContainer.appendChild(profileDetail)

// Content Nav //

const contentNav = document.getElementById('content-nav');
const contentNavContent = document.createElement('div');

contentNavContent.setAttribute('id',"nav-content");

contentNavContent. innerHTML =`
<div class= "nav-selector">
    Tweets
</div>

<div class= "nav-selector">
    Tweets & replies
</div>

<div class= "nav-selector">
    Media
</div>

<div class= "nav-selector">
    Likes
</div>

`;

contentNav.appendChild(contentNavContent);

// Tweet Container //

const tweetContainer = document.getElementById('tweet-container');


const TweetsU1 = `${user1.tweets}`;

user1.tweets.forEach(function(TweetsU1,i){
    
    
    const tweetContent = document.createElement('div');
    tweetContent.setAttribute('id','tweetContent');
    

    tweetContent.innerHTML=`
    <div id= "profile-picture">
        <img src = "${user1.avatarURL}"/>
    </div>

    <div id= "tweet-bio>
        <div id= "twitter-title">
            <p class= "display-name">${user1.displayName}</p>

                <svg viewBox="0 0 24 24" aria-label="Verified account" class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr">
                  <g>
                     <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z">
                    </path>
                  </g>
            </svg>
        </div>

            <div class= "sub-header">
            ${user1.userName}
            </div>

            <div id = "tweet-timestamp">
            ${TweetsU1.timestamp}
         </div>
    </div>
        <div id= "tweet-text">
            ${TweetsU1.text}
        </div>

    `;

    tweetContainer.appendChild(tweetContent);
})
console.log(TweetsU1)