import React from 'react' 
import './style.less'
interface HomePageProps{
    x: string
}
const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
    return (
        <div className="home-page-container">
            {props.x}
        </div>
    )
}

export default HomePage
