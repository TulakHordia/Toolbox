// src/scripts/active_directory.js

window.toolboxScripts = {
    'entra-script-1': `
  # Connect to Microsoft Graph
  Import-Module Microsoft.Graph
  Connect-MgGraph -Scopes "User.Read.All"
  `,
  
    'entra-script-2': `
  # List 10 users from Entra ID
  Get-MgUser -Top 10 | Select-Object DisplayName, UserPrincipalName
  `
  };