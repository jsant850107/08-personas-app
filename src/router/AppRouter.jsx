import { Route, Routes } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import { PersonasRoutes } from "../personas/routes/PersonasRoutes";



export const AppRouter = () => {
    return (
        <Routes>    

            {/* Login y Registro */}
            <Route path="/auth/*" element={ <AuthRoutes/> } />

            {/* PersonasApp */}
            <Route path="/*" element={ <PersonasRoutes/> } />


        </Routes>
    )
}


