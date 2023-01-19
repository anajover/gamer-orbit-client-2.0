import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { gamesByPlatformService } from "../services/games.services";

function VideogamesPlatform() {
    const navigate = useNavigate();

    const [gamesByPlatform, setGamesByPlatform] = useState(null);

    useEffect(() => {
        getVideogamesByPlatform();
    }, [])

    const getVideogamesByPlatform = async () => {
        try {
            const response = await gamesByPlatformService();
      
            setGamesByPlatform(response.data);
            console.log("By Platform", response.data);
          } catch (error) {
            navigate("/error");
          }
        }

        if (gamesByPlatform === null) {
            return (
                <>
                <br /> <br />
                <h4>Loading...</h4>
                <PulseLoader color={"rgb(0,0,0)"} />
                </>
            );
        };

        return (

            <div>

            Videogames By Platforms

            </div>

        )
}

export default VideogamesPlatform;