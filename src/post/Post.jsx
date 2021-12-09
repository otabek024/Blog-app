import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <img src="https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='postImg' />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Doloremque unde atque nulla consequuntur, ex perferendis 
        optio harum tempora. Inventore repellat sint assumenda nobis 
        minus ad cupiditate odio illo eos laboriosam.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Doloremque unde atque nulla consequuntur, ex perferendis 
        optio harum tempora. Inventore repellat sint assumenda nobis 
        minus ad cupiditate odio illo eos laboriosam.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Doloremque unde atque nulla consequuntur, ex perferendis 
        optio harum tempora. Inventore repellat sint assumenda nobis 
        minus ad cupiditate odio illo eos laboriosam.
      </p>
    </div>
  )
}

export default Post
