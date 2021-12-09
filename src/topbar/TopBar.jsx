import './topbar.css'

const TopBar = () => {
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-github-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className='topListItem'>HOME</li>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
          <li className='topListItem'>WRITE</li>
          <li className='topListItem'>LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img src="https://images.pexels.com/photos/8230096/pexels-photo-8230096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='topImg'/>
        <li className='topSearchIcon fas fa-search'></li>
      </div>
    </div>
  )
}

export default TopBar
