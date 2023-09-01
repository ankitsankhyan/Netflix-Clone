import React from 'react'
import './ProfileScreen.css'
import Nav from '../components/Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../Slices/userSlice'
import { auth } from '../auth/firebase'
import { useNavigate } from 'react-router-dom'
function ProfileScreen() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
  return (
 
  
    <div className='profileScreen'>
    <Nav />
    <div className="profileScreen__body">
    <h1>Edit Profile</h1>
    <div className="profileScreen__info">
  
        
 
  
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAACnCAMAAABDyLzeAAAAZlBMVEUNfoD///8AenwAdngAc3UAb3H0+vo2iYsAcXTa6Oisy8sshojs9PTo8vLj7u55rrBrq6ybwcJfoaO20NE/kZK919dRmJnJ3d1Dl5jD19iRvLx/tLZJkpSv0dGgycpDjI6IsrMZiYttO8SmAAAC8ElEQVR4nO3Z63aiMBQF4HDCxRCu4RJFsfr+L1nQegF0CkicTmd/q3/qsjm7ISSQMAYAAAAAAAAAAAAAAAAA8FsQt4mvyHCRFWcr+4UiZLN4o3WmiJuLymnta72pvNlJuVdYZ24qDQUl2oZfRQo1rwapyLrSnpmg0r/VCLZ8Rgu0C607mpkIyuv7GpaaEzTqNGEVi4ds+mLbreFOv/S818ScNr6NKXt9YdXTc4peE9beXjonj/s1go+JQWkd9NtwncVzbvo1rGTiCOWxO2hj+RtJD2qkEy8arwZNWIvHlMOcUwcX/SP9Sfk7xmf28vhkvD9lWPXy93t/7rPc3dSLNpgz3jJ/+pNrEOtNoNnSKdsivc4IZvQFlZ31XRxNrO/UXd+TOTWovOtRU89L7P55qZp3B1Bef01ORp8/L2N07vNn24hMCqHrxMgz3aUIy/da661Hr7x58JXjvPLqMqqI7TiOwTcbAAAAAAAA+K8Rk/KVd+OxVV78e4qLKKpzo0HJpiOfc/Zza0BtTnsvkamNl1MVmYZuuJ3bp0RSXbey/MV3WW9W5/1rHdOMPiXbq+423ITBE1912coV5cSkZPNd3dmsNZiT7rbZRbufNa5U+71d1T9Oy8xd9+5xQJjF+YheJZuVVTE4VDF5H/GkW8uNioQcmz/pVyJuO6syE4MTlWaITz5HmMIZngNZUX1QH5Jx3sS9an5hcqcqf3CYcvr/tOeYnT5lOjwVa+qGuvDTQ6LKvKVUfPD9QoSPvtt8u1Ymt4PPQWn9oEsvAdwgDJof130c8JLS/JrZJuVr/WC8jeOKir1tP5lI7R8Ou++EWfK+lKekTMb6D9f2kaBQHnvLFe/gdp6Ovv6uyGJm+pDimWbuKQ+1+K5bXVFU6vhsin1T1OYBqEz2T7O6Yh+Xko1dXw1nbdacozqkvq+1ONHNbNpMp+poO/ZPiHjTLEBNIMmk15LXT36q86L5t1MAAAAAAAAAAAAAAAAAAAAAAAAA/C6fnBEcrBLRkBIAAAAASUVORK5CYII=" loading='lazy' alt="" />

     <div className="profileScreen__details">
        <h2>{user.email}</h2>
        <div className="profileScreen__plans">
            <button onClick={()=> {
              auth.signOut();
              navigate('/');
            }}>
              Sign Out
            </button>
        </div>
     </div>
     </div>
    </div>
    </div>
   
     
   
  )
}

export default ProfileScreen
