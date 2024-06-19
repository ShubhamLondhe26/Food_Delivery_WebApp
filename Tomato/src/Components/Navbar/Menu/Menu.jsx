import './Menu.css';
import { menu_list } from '../../../assets/assets';

const Menu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Menu</h1>
      <p className='exlpore-menu-text'>Choose from a diverse Menu</p>
      <div className="menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div key={index} className="explore-menu-list-item">
                    <img src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>

            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default Menu
