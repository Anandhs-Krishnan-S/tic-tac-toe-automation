# Tic-Tac-Toe — Automated (Docker + Terraform + GitHub Actions + Azure)

## Local run
npm install
npm start
# open http://localhost:3000

## Docker
docker build -t ttt:local .
docker run --rm -p 3000:3000 ttt:local

## Terraform (creates Azure infra)
az login
cd terraform
terraform init
terraform apply -auto-approve

## CI/CD (auto-deploy to Azure)
1) Create a GitHub repo and push
2) In Azure Web App -> Get publish profile (Download)
3) In GitHub -> Settings -> Secrets -> Actions
   Add: AZURE_WEBAPP_PUBLISH_PROFILE = <paste XML>
4) Push to main and watch Actions run

App URL:
https://tic-tac-toe-karnishwar1725.azurewebsites.net
