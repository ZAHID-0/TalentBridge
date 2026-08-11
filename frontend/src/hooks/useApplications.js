import { useContext } from "react";
import ApplicationContext from "../contexts/ApplicationContext";

export const useApplications = () => {

    const context = useContext(ApplicationContext);

    if (!context) {
        throw new Error(
            "useApplications must be used inside ApplicationProvider"
        );
    }

    return context;
};