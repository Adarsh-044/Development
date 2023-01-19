/*

Some Specific tools or extension to make work easier. 


npm init -y     // Make package.json file 
creating  of index.html, style.css., app.sj


---------------------------------------------------

?   Prettier 

    Creates predefined style and removes extra colons / semicolons
    npm install --global prettier

    So that our tool can know this is a Prettier project, we're going to create a file called .prettierrc and put {} in it. This lets everyone know this is a Prettier project that uses the default configuration.

    npm install -D prettier@2.7.1

    Add this in scripts sections 
*/
{
    "format" : "prettier --write \"src/**/*.{js,jsx}\""
}   
/*
-----------------------------------------------------------

? Es lint
    Helps you find and fix problems with your JavaScript code. 
    
    npm install -D eslint@8.24.0 eslint-config-prettier@8.5.0 
    npm install -D eslint-plugin-import@2.26.0 eslint-plugin-jsx-a11y@6.6.1 eslint-plugin-react@7.31.8  


    Create file
        .eslintrc.json.
                {
                    "extends": ["eslint:recommended", "prettier"],
                    "plugins": [],
                    "parserOptions": {
                        "ecmaVersion": 2022,
                        "sourceType": "module",
                        "ecmaFeatures": {
                        "jsx": true
                        }
                    },
                    "env": {
                        "es6": true,
                        "browser": true,
                        "node": true
                    }
                }

 */

    Scripts 
                "lint": "eslint \"src/**/*.{js,jsx}\" --quiet",

/*
    npm run lint -- --debug // To find the problems 

    npm run lint -- --fix   // To fix the problems 



    
    ---------------------------------------------------------
Creating of .gitignore folder. 
        node_modules
        dist/
        .env
        .DS_Store
        coverage/
        .vscode/    

--------------------------------------------------------------------

? Vite 
        
    We can separate files out for code organization and have a tool stitch them together for us
    We can include external, third-party libraries from npm

    npm install -D vite@3.1.4 @vitejs/plugin-react@2.1.0

    <!-- delete the two unpkg script lines -->
    <script type="module" src="./App.jsx"></script>

    Create new file 
        vite.config.js
                import { defineConfig } from "vite";
                import react from "@vitejs/plugin-react";

                export default defineConfig({
                plugins: [react()],
                root: "src",
                });

    
--------------------------------------------------------

Now, Installing actual react 
    npm install react@18.2.0 react-dom@18.2.0

    Scripts 
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"

Now, npm run dev :: Your server starts. 
-------------------------------------------------

?   Hooks

    Hooks allow you to reuse stateful logic without changing your component hierarchy. 
    
    import {useState} from "react";
    const [location, setLocation] = useState("");
                    ||
    const locationHook = useState("");
    const location = locationHook[0];
    const setLocation = locationHook[1];


    npm install -D eslint-plugin-react-hooks@4.6.0  // To use in good way
    
    Add this to ESLint:
    {
        "extends": [
            …
            "plugin:react-hooks/recommended",
            …
        ]
    }

-------------------------------------------------------------------


*/