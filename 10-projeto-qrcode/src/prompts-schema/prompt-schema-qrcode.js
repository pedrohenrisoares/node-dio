import chalk from "chalk";

const PromptSchemaQRCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QR Code"),
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo de QRCode: (1- NORMAL) ou (2- TERMINAL)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  },
];

export default PromptSchemaQRCode;
