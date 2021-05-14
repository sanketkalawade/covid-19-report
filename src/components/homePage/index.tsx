import React from 'react'
interface HomePageProps{
    x: string
}
const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
    return (
        <div>
            {props.x}
        </div>
    )
}

export default HomePage
