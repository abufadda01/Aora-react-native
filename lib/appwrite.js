import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';
import { endpoint, platform , projectId , databaseId , userCollectionId , videoCollectionId , storageId } from '@env';


export const appwriteConfig = {
    endpoint  ,
    platform  ,
    projectId ,
    databaseId ,
    userCollectionId ,
    videoCollectionId  ,
    storageId
}


const client = new Client()


client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform) 



const account = new Account(client)
const avatars = new Avatars(client)
const dbs = new Databases(client)



export const createUser = async (email , password , username) => {
    try {
        const newAccount = await account.create(ID.unique() , email , password , username)
        if(!newAccount) throw Error
        const avatarUrl = avatars.getInitials(username)
        await signIn(email , password)
        const newUser = await dbs.createDocument(appwriteConfig.databaseId , appwriteConfig.userCollectionId , ID.unique() , {accountId : newAccount.$id , email , username , avatar : avatarUrl})
        return newUser
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }

}




export async function signIn (email , password){
    try {
        const session = await account.createEmailPasswordSession(email , password)
        return session
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}




export const getCurrentUser = async () => {
    try {
        const currentAcc = await account.get() // get the logged in user account
        if(!currentAcc) throw Error
        const currentUser = await dbs.listDocuments(appwriteConfig.databaseId , appwriteConfig.userCollectionId , [Query.equal("accountId" , currentAcc.$id)])
        if(!currentUser) throw Error
        return currentUser.documents[0]
    } catch (error) {
        console.log(error)
    }
}




export const getAllPosts = async () => {
    try {
        const posts = await dbs.listDocuments(appwriteConfig.databaseId , appwriteConfig.videoCollectionId)
        return posts.documents
    } catch (error) {
        console.log(error)
    }
}


