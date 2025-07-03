import { execSync } from "child_process";
import { DEPLOY_CONFIG } from "./src/deploy.config"

switch (DEPLOY_CONFIG.host) {
    case "github":
        execSync("npm run build && npm run deploy-github", { stdio: "inherit" });
        console.log("Le site sera bientôt accessible sur https://ylg29fr.github.io/nif-portfolio/");
        break;

    case "surge":
        execSync("npm run build && npm run deploy-surge", { stdio: "inherit" });
        console.log("Le site sera bientôt accessible sur https://beta-portfolio-yoannlegoff.surge.sh/");
        break;

    default:
    console.error("Configuration incorrecte ! Veuillez modifier le fichier src/deploy.config.ts");
        break;
}