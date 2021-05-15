import React, { useEffect } from 'react'
import callSummaryApi from '../../shared-framework/methods/summary'
const HomePage: React.FC<{}> = () => {
    useEffect(() => {
       callSummaryApi()
    }, [])
    return (
        <div>
            India
        </div>
    )
}

export default HomePage


