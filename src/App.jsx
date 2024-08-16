import { useState } from "react";
import "./App.css";
import allMeals from "./meals.json";

function App() {
    const [step, setStep] = useState(1);
    const [aufwand, setAufWand] = useState("egal");
    const [preis, setPreis] = useState("egal");
    const [vegetarisch, setVegetarisch] = useState("egal");

    const [, setState] = useState(false);

    const rerender = () => {
        setState((state) => !state);
    };

    const meals = allMeals
        .filter((meal) => {
            if (aufwand === "egal") return true;
            if (aufwand === meal.effort) return true;
            return false;
        })
        .filter((meal) => {
            if (preis === "egal") return true;
            if (preis === meal.cost) return true;
            return false;
        })
        .filter((meal) => {
            if (vegetarisch === "egal") return true;
            if (vegetarisch === Boolean(meal.veggie)) return true;
            return false;
        });

    console.log(meals);

    const randomIndex = Math.floor(Math.random() * meals.length);
    const randomMeal = meals[randomIndex];

    const handleWeiterClick = () => {
        setStep(2);
    };

    const handleZurueckClick = () => {
        setStep(1);
    };

    const handleResetClick = () => {
        setAufWand("egal");
        setPreis("egal");
        setVegetarisch("egal");
    };

    const handleRandomizeClick = () => {
        rerender();
    };

    return (
        <div className="container">
            {step === 1 ? (
                <div className="container mx-auto mt-16 max-w-2xl items-center justify-center">
                    <div className=" bg-gray-100 p-12">
                        <h1 className="text-2xl font-bold mb-6 text-center">
                            WAS KOCHEN WIR HEUTE?
                        </h1>

                        <section className="bg-white shadow-md rounded-lg p-6">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <label
                                        htmlFor="aufwand"
                                        className="w-32 text-lg font-medium text-right"
                                    >
                                        Aufwand
                                    </label>
                                    <div className="flex space-x-4">
                                        <button
                                            className={`px-4 py-2 rounded-lg ${
                                                aufwand === "egal"
                                                    ? "bg-black text-white"
                                                    : "bg-gray-200 text-black"
                                            }`}
                                            onClick={() => setAufWand("egal")}
                                        >
                                            Egal
                                        </button>
                                        <button
                                            className={`px-4 py-2 rounded-lg ${
                                                aufwand === "low"
                                                    ? "bg-black text-white"
                                                    : "bg-gray-200 text-black"
                                            }`}
                                            onClick={() => setAufWand("low")}
                                        >
                                            Gering
                                        </button>
                                        <button
                                            className={`px-4 py-2 rounded-lg ${
                                                aufwand === "high"
                                                    ? "bg-black text-white"
                                                    : "bg-gray-200 text-black"
                                            }`}
                                            onClick={() => setAufWand("high")}
                                        >
                                            Hoch
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <label
                                        htmlFor="preis"
                                        className="w-32 text-lg font-medium text-right"
                                    >
                                        Preis
                                    </label>
                                    <div className="flex space-x-4">
                                        <button
                                            className={`px-4 py-2 rounded-lg ${
                                                preis === "egal"
                                                    ? "bg-black text-white"
                                                    : "bg-gray-200 text-black"
                                            }`}
                                            onClick={() => setPreis("egal")}
                                        >
                                            Egal
                                        </button>
                                        <button
                                            className={`px-4 py-2 rounded-lg ${
                                                preis === "low"
                                                    ? "bg-black text-white"
                                                    : "bg-gray-200 text-black"
                                            }`}
                                            onClick={() => setPreis("low")}
                                        >
                                            Gering
                                        </button>
                                        <button
                                            className={`px-4 py-2 rounded-lg ${
                                                preis === "high"
                                                    ? "bg-black text-white"
                                                    : "bg-gray-200 text-black"
                                            }`}
                                            onClick={() => setPreis("high")}
                                        >
                                            Hoch
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <label
                                        htmlFor="vegetarisch"
                                        className="w-32 text-lg font-medium text-right"
                                    >
                                        Vegetarisch
                                    </label>
                                    <div className="flex space-x-4">
                                        <button
                                            className={`px-4 py-2 rounded-lg ${
                                                vegetarisch === "egal"
                                                    ? "bg-black text-white"
                                                    : "bg-gray-200 text-black"
                                            }`}
                                            onClick={() =>
                                                setVegetarisch("egal")
                                            }
                                        >
                                            Egal
                                        </button>
                                        <button
                                            className={`px-4 py-2 rounded-lg ${
                                                vegetarisch === true
                                                    ? "bg-black text-white"
                                                    : "bg-gray-200 text-black"
                                            }`}
                                            onClick={() => setVegetarisch(true)}
                                        >
                                            Ja
                                        </button>
                                        <button
                                            className={`px-4 py-2 rounded-lg ${
                                                vegetarisch === false
                                                    ? "bg-black text-white"
                                                    : "bg-gray-200 text-black"
                                            }`}
                                            onClick={() =>
                                                setVegetarisch(false)
                                            }
                                        >
                                            Nein
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div>
                        <div className="flex justify-evenly mt-6">
                            <button
                                onClick={handleResetClick}
                                className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                Reset
                            </button>
                            <button
                                onClick={handleWeiterClick}
                                className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                Weiter
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="result-container">
                    <div className="result-container flex flex-col items-center justify-center bg-gray-100 p-12">
                        <h1 className="text-4xl font-bold mb-8 text-gray-800">
                            WAS KOCHEN WIR HEUTE?
                        </h1>

                        <div className="result bg-white rounded-lg shadow-lg p-6 w-1/2">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                                {randomMeal.name}
                            </h2>
                            <div className="flex justify-start">
                                <div className="w-1/2 m-2">
                                    <img
                                        src={randomMeal.image}
                                        alt="picture of the food"
                                        className="w-full h-48 object-cover rounded-md"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <p className="text-gray-600 mb-2">
                                        <strong className="font-semibold">
                                            Aufwand:
                                        </strong>{" "}
                                        {randomMeal.effort}
                                    </p>
                                    <p className="text-gray-600 mb-2">
                                        <strong className="font-semibold">
                                            Kosten:
                                        </strong>{" "}
                                        {randomMeal.cost}
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        <strong className="font-semibold">
                                            Vegetarisch:
                                        </strong>{" "}
                                        {randomMeal.veggie === true
                                            ? "Ja"
                                            : "Nein"}
                                    </p>

                                    <h3 className="text-xl font-medium mb-2 text-gray-700">
                                        Einkaufsliste
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-600">
                                        {randomMeal.ingredients.map((i) => (
                                            <li key={i}>{i}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-evenly mt-6 mx-8">
                        <button
                            onClick={handleZurueckClick}
                            className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            Zurück
                        </button>
                        <button
                            onClick={handleRandomizeClick}
                            className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            Randomize
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
