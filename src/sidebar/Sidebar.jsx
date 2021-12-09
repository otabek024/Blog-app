import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.pexels.com/photos/775091/pexels-photo-775091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab cumque velit tenetur consequuntur temporibus dicta sunt labore commodi aliquam facilis delectus, a aspernatur soluta et incidunt repudiandae numquam itaque quidem. Eveniet error beatae itaque asperiores eligendi quasi, voluptates unde voluptate nemo? Iusto accusamus ad quas et nulla molestiae cumque minima.</p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className='sidebarList'>
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
        <i className="sidebarIcon fab fa-github-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
