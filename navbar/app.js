import React,{Component} from 'react'
import navbar from './navbar/navbar'
import Login from './Components/login'
import location from './Components/location'
class app extends Component{
    render(){
        return(
            <div>
                <navbar/>
                <location/>
            </div>
        )
    }
}
export default app