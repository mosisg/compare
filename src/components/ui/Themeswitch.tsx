import React, { useState, useEffect } from 'react';

const Themeswitch = () => {
    const [theme, setTheme] = useState('light'); // État du thème

    useEffect(() => {
        // Fonction pour changer le thème
        const toggleTheme = () => {
            const nextTheme = theme === 'light' ? 'dark' : 'light';
            document.body.classList.toggle('dark', nextTheme === 'dark');
            setTheme(nextTheme);
        };

        // Ajoute un écouteur d'événements pour basculer le thème
        document.querySelectorAll('.theme-switcher_switch__2Swty').forEach(button => {
            button.addEventListener('click', toggleTheme);
        });

        // Nettoyage de l'écouteur d'événements lors du démontage du composant
        return () => {
            document.querySelectorAll('.theme-switcher_switch__2Swty').forEach(button => {
                button.removeEventListener('click', toggleTheme);
            });
        };
    }, [theme]);

    return (
        <div>
            <div className="theme-switcher_root__LFmWp" role="radiogroup">
                <button
                    aria-checked={theme === 'light'}
                    aria-label="Switch to light theme"
                    className="theme-switcher_switch__2Swty"
                    data-active={theme === 'light'}
                    data-theme-switcher="true"
                    role="radio"
                    type="button"
                >
                    <svg
                        className="with-icon_icon__MHUeb"
                        data-testid="geist-icon"
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                        style={{ color: "currentcolor", width: 16, height: 16 }}
                    >
                        <circle cx={12} cy={12} r={5} />
                        <path d="M12 1v2" />
                        <path d="M12 21v2" />
                        <path d="M4.22 4.22l1.42 1.42" />
                        <path d="M18.36 18.36l1.42 1.42" />
                        <path d="M1 12h2" />
                        <path d="M21 12h2" />
                        <path d="M4.22 19.78l1.42-1.42" />
                        <path d="M18.36 5.64l1.42-1.42" />
                    </svg>
                </button>
              
                <button
                    aria-checked={theme === 'dark'}
                    aria-label="Switch to dark theme"
                    className="theme-switcher_switch__2Swty"
                    data-active={theme === 'dark'}
                    data-theme-switcher="true"
                    role="radio"
                    type="button"
                >
                    <svg
                        className="with-icon_icon__MHUeb"
                        data-testid="geist-icon"
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                        style={{ color: "currentcolor", width: 16, height: 16 }}
                    >
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Themeswitch;
