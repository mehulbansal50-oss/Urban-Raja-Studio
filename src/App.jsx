import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css'
import outfit from "./assets/outfit.png";
import HomePage from './HomePage'
import TrendNow from './TrendNow'
import FashionTrends from './FashionTrends'
import Clothes  from './Clothes';
import Footwear from './Footwear';
import Accessories from './Accessories';
import GroomingTrend from './GroomingTrend';
import BoxyFit from './BoxyFit';
import BaggyJeans from './BaggyJeans';
import OversizedShirts from './OversizedShirts';
import CargoPants from './CargoPants';
import LinenTrousers from './LinenTrousers';
import RetroSneaker from './RetroSneaker';
import Loafers from './Loafers';
import MinimalSneaker from './MinimalSneaker';
import MinimalChain from './MinimalChain';
import MinimalRings from './MinimalRings';
import MinimalWatch from './MinimalWatch';
import Hairstyle from './Hairstyle';
import Beard from './Beard';
import About from './About';
import Offer from './Offer';
import WhyUrbanRaja from './WhyUrbanRaja';
import AccountType from './AccountType';
import UserAccount from './UserAccount';
import CreateNew from './CreateNew';
import Fragrence from './Fragrence';
import Skincare from './Skincare';
import FashionBlog from './FashionBlog';
import StreetwearTrend from './StreetwearTrend';
import OldMoneyStyle from './OldMoneyStyle';
import OversizedFashion from './OversizedFashion';
import TrendingColours from './TrendingColours';
import MustHaveWardrobe from './MustHaveWardrobe';
import FashionTrendsToWatch from './FashionTrendsToWatch';
import StyleGuide from './StyleGuide';
import StyleGuideDetail from "./StyleGuideDetail";
import Grooming from "./Grooming";
import GroomingDetail from "./GroomingDetail";
import Seasonal from "./Seasonal";
import SeasonDetail from "./SeasonDetail";
import Courses from './Courses';
import Styling from './Styling';
import AIStylist from "./AIStylist";
import PersonalStyling from "./PersonalStyling";
import PersonalStyleConsultation from "./PersonalStyleConsultation";
import AdminLogin from './AdminLogin';
import AdminDashboard from "./AdminDashboard";
import AdminFashionBlogs from "./AdminFashionBlogs";
import AdminStyleGuides from "./AdminStyleGuides";
import AdminGrooming from "./AdminGrooming";
import AdminSeasonalContent from "./AdminSeasonalContent";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='app'>

    <nav className='navbar'>
      <NavLink className='link' to='/'>Home</NavLink>
      
      <div className="trend-dropdown">
      <NavLink className='link'>Trends</NavLink>
      <div className="dropdown-menu">
         <NavLink className='link' to="/trendNow">Trending Now</NavLink>
      <NavLink className='link' to="/FashionTrends">Fashion Trends</NavLink>
      <NavLink className='link' to="/GroomingTrend">Gromming Trends</NavLink>
      
      </div>

      </div>

      <div className="trend-dropdown">
      <NavLink className='link'>Blog</NavLink>
       <div className="dropdown-menu">
         <NavLink className='link' to="/FashionBlog">Fashion</NavLink>
      <NavLink className='link' to="/StyleGuide">Style Guide</NavLink>
      <NavLink className='link' to="/Grooming">Grooming</NavLink>
      <NavLink className='link' to="/seasonal">Seasonal</NavLink>
       </div>
      </div>
      
      
      <NavLink className='link' to="/Courses">Course</NavLink>
      <NavLink className='link' to="/Styling">1:1 Styling</NavLink>
      <NavLink className='link'>Store</NavLink>
      <NavLink to='/AccountType'>
          <img className='profile-icon' src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-transparent-260nw-2666486791.jpg" alt="Prolife"/>
        </NavLink>
    </nav>

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/TrendNow' element={<TrendNow/>}/>
      <Route path='/FashionTrends' element={<FashionTrends/>}/>
      <Route path='/Clothes' element={<Clothes/>}/>
      <Route path='/Footwear' element={<Footwear/>}/>
      <Route path='/Accessories' element={<Accessories/>}/>
      <Route path='/GroomingTrend' element={<GroomingTrend/>}/>
      <Route path='/BoxyFit' element={<BoxyFit/>}/>
      <Route path='/BaggyJeans' element={<BaggyJeans/>}/>
      <Route path='/OversizedShirts' element={<OversizedShirts/>}/>
      <Route path='/CargoPants' element={<CargoPants/>}/>
      <Route path='/LinenTrousers' element={<LinenTrousers/>}/>
      <Route path='/RetroSneaker' element={<RetroSneaker/>}/>
      <Route path='/loafers' element={<Loafers/>}/>
      <Route path='/MinimalSneaker' element={<MinimalSneaker/>}/>
      <Route path='/MinimalChain' element={<MinimalChain/>}/>
      <Route path='/MinimalRings' element={<MinimalRings/>}/>
      <Route path='/MinimalWatch' element={<MinimalWatch/>}/>
      <Route path='/Hairstyle' element={<Hairstyle/>}/>
      <Route path='/Beard' element={<Beard/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Offer' element={<Offer/>}/>
      <Route path='/WhyUrbanRaja' element={<WhyUrbanRaja/>}/>
      <Route path='/AccountType' element={<AccountType/>}/>
      <Route path='/UserAccount' element={<UserAccount/>}/>
      <Route path='/CreateNew' element={<CreateNew/>}/>
      <Route path='/Fragrence' element={<Fragrence/>}/>
      <Route path='/Skincare' element={<Skincare/>}/>
      <Route path='/FashionBlog' element={<FashionBlog/>}/>
      <Route path='/StreetwearTrend' element={<StreetwearTrend/>}/>
      <Route path='/OldMoneyStyle' element={<OldMoneyStyle/>}/>
      <Route path='/OversizedFashion' element={<OversizedFashion/>}/>
      <Route path='/TrendingColours' element={<TrendingColours/>}/>
      <Route path='/MustHaveWardrobe' element={<MustHaveWardrobe/>} />
      <Route path='/FashionTrendsToWatch' element={<FashionTrendsToWatch/>}/>
      <Route path='/StyleGuide' element={<StyleGuide/>}/>
      <Route path="/style-guides/:id" element={<StyleGuideDetail />} />
      <Route path="/Grooming" element={<Grooming />} />
      <Route path="/Grooming" element={<Grooming />} />
      <Route path="/grooming/:id" element={<GroomingDetail />} />
      <Route path="/seasonal" element={<Seasonal />} />
      <Route path="/seasonal/:id" element={<SeasonDetail />} />
      <Route path='/Courses' element={<Courses />} />
      <Route path='/Styling' element={<Styling />} />
      <Route path="/AIStylist" element={<AIStylist />} />
      <Route path="/PersonalStyling" element={<PersonalStyling />} />
      <Route path="/PersonalStyleConsultation" element={<PersonalStyleConsultation />} />
      <Route path="/admin" element={<AdminLogin/>} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/fashion-blogs" element={<AdminFashionBlogs />} />
      <Route path="/admin/style-guides" element={<AdminStyleGuides />} />
      <Route path="/admin/grooming" element={<AdminGrooming />} />
      <Route path="/admin/seasonal-content" element={<AdminSeasonalContent />} />
    </Routes>
   
   </div>
    </>
  )
}

export default App
