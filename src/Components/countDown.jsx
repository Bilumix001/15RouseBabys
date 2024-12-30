import React, { useState, useEffect } from 'react';
import '../Styles/countDown.css'

const Countdown = () => {
    // Establece la fecha y hora objetivo para la cuenta regresiva
    const targetDate = new Date("2025-01-11T19:00:00").getTime();

    // Estado para almacenar los días, horas, minutos y segundos
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    // Función para formatear los números a dos dígitos
    const formatTime = (time) => {
        return time.toString().padStart(2, '0'); // Asegura que siempre tenga 2 dígitos
    };

    // useEffect para actualizar la cuenta regresiva cada segundo
    useEffect(() => {
        const interval = setInterval(() => {
            // Obtén la fecha y hora actuales
            const now = new Date().getTime();
            // Calcula la diferencia entre la fecha objetivo y la actual
            const distance = targetDate - now;
            // Si la cuenta regresiva ha terminado, limpia el intervalo
            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
                return;
            }
            // Calcula los días, horas, minutos y segundos restantes
            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        // Limpia el intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className='cuerpa'>
            <h1 className='title_CounterDown'>Faltan</h1>
            <div className='container'>
                <div className='dias'>
                    <span>{formatTime(timeLeft.days)}:</span>
                    <p>Días</p>
                </div>
                <div className="horas">
                    <span> {formatTime(timeLeft.hours)}:</span>
                    <p>Horas</p>
                </div>
                <div className="minutos">
                    <span> {formatTime(timeLeft.minutes)}:</span>
                    <p>Minutos</p>
                </div>
                <div className="segundos">
                    <span>{formatTime(timeLeft.seconds)}</span>
                    <p>Segundos</p>
                </div>
                
            </div>
        </div>
    );
};

export default Countdown;
