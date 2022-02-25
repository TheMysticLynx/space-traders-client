import { useNavigate } from "react-router-dom"





export function withNavigation(Component) {
    console.log("test")
    return props => <Component {...props} navigate={useNavigate()} />
}