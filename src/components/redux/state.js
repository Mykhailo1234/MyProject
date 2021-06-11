import { renderEntireTree } from "../../render"

export let state = {
    messagesPage: {
        messagData: [
            { id: 1, message: "Hi!" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "It's good" },
            { id: 4, message: "Ok" }
        ],
        dialogsData: [
            { id: 1, name: "Inna" },
            { id: 2, name: "Misha" },
            { id: 3, name: "Vadim" },
            { id: 4, name: "Yulia" }
        ]
    },
    profilePage: {
        posts: [
            { id: 1, message: "Hi", likesCount: 0 },
            { id: 2, message: "How are you?", likesCount: 1 },
            { id: 3, message: "It's good", likesCount: 1 }
        ]
    },
    friends: {
        friend: [
            { id: 1, nameFriends: "Inna" },
            { id: 2, nameFriends: "Misha" },
            { id: 3, nameFriends: "Vadim" },
            { id: 4, nameFriends: "Yulia" }
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}

export let addPostMessages = (postMessages) => {
    let newPostMessag = {
        id: 5,
        message: postMessages
    }
    state.messagesPage.messagData.push(newPostMessag)
    renderEntireTree(state)
}