import Header1 from '../Header/Header1/Header1'
import Header2 from '../Header/Header2/Header2'
import Header3 from '../Header/Header3/Header3'
import Hero1 from '../Hero/Hero1/Hero1'
import Hero2 from '../Hero/Hero2/Hero2'
import Collection1 from '../Collections/Collection1/Collection1'
import Collection2 from '../Collections/Collection2/Collection2'

export default function MainLayout(props){
  return(<div className="fixed-nav transparent-nav">
    <Header3 />
    <Hero2 />
      <Collection1 />
      <Collection2 />
    <main >{props.children}</main>
    <header>This is the Footer</header>
  </div>)
}