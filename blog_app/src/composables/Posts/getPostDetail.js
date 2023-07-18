
import {ref} from 'vue';


const getPostDetail=(id)=>{
const post=ref(null);    
const error=ref(null);

const load=async ()=>{
  try{
        let data=await fetch('http://localhost:3000/posts/'+id);
        if(!data.ok){
        throw Error('No data available');
        }
        post.value=await data.json();
    }catch(exception){
        error.value=exception.message;
    }
    }
return {post,error,load}

}

export default getPostDetail;