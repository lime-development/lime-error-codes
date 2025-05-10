# 🍋 Lime Errors Codes

This package provides short error codes and human-readable messages for [Lime smart contracts](https://github.com/lime-development/lime-contracts), supporting multilingual output (currently English).

## 🧩 About Lime Pad

[**Lime Pad**](https://lime.dev/) is a decentralized launchpad platform designed to help users create, launch, and manage smart contracts with safety and transparency. Lime Pad aims to make blockchain accessible to everyone — from developers to crypto communities.

The error codes in this package are tightly integrated with Lime Pad's smart contract suite, ensuring that frontends can deliver clear, understandable feedback to users.

## 🔧 Purpose

To minimize on-chain gas costs, our contracts use short error codes (e.g., `E1`, `E2`). This package maps those codes to full human-readable messages for frontend and UI applications.

## 📦 Installation

```bash
npm install @lime-development/lime-errors-codes
# or
yarn add @lime-development/lime-errors-codes
```

## 🚀 Usage

The library provides a simple way to convert error codes from Lime smart contracts into readable messages. It supports both Node.js and browser environments.

### Basic Usage

```javascript
// ESM Import
import { getErrorMessage } from '@lime-development/lime-errors-codes';

// CommonJS Import
const { getErrorMessage } = require('@lime-development/lime-errors-codes');

// Convert error code to human-readable message
const message = getErrorMessage('F2'); // "Token creation failed"

// Get technical details (for developers)
const techMessage = getErrorMessage('F2', 'tech'); // "Factory: token creation transaction failed"
```

### Error Handling Example

Here's how to extract and interpret error codes from smart contract interactions:

```javascript
try {
  // Attempt to create an ERC20 token
  await factory.createERC20("Test", "Test");
} catch (error) {
  // Extract the error code from the error message
  const message = error.message || "";
  const match = message.match(/'([^']+)'/);
  const code = match?.[1];
  
  if (code) {
    // Get human-readable error message for the UI
    const userMessage = getErrorMessage(code);
    console.log(`Error: ${userMessage}`);
    
    // Get technical error details for debugging
    const techDetails = getErrorMessage(code, 'tech');
    console.log(`Technical details: ${techDetails}`);
  }
}
```

In the example above:
1. We attempt to create an ERC20 token using the Lime factory contract
2. If the operation fails, we extract the error code from the error message
3. We use `getErrorMessage()` to get both user-friendly and technical explanations of the error

## 🌐 Supported Environments

This package is designed to work in:
- Node.js applications
- Modern browsers (via ESM)
- Legacy browsers (via UMD)
- Web3 frontends and dApps