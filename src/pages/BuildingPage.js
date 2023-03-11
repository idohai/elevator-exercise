import ElevatorSystem from "../components/ElevatorSystem"
import CallButtonGrid from '../components/CallButtonGrid'


const BuildingPage = () => {
    const containerStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#B5B3B3",
        height: '100vh'
    }
    return (
        <div style={containerStyles}>
            <div>
                <ElevatorSystem/>
            </div>
        </div>
    )
}

export default BuildingPage;