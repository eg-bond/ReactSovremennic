#!/bin/bash
set -euo pipefail

# ============================================================
# Deploy schedule.json to server
# Usage: bash ExternalScripts/deploySchedule.sh
# ============================================================

# --- Configuration (EDIT THESE) ---
SERVER_USER="root"
SERVER_HOST="83.217.201.69"
SERVER_PATH="/var/www/data/schedule.json"
# ----------------------------------

LOCAL_FILE="public/schedule.json"

if [ ! -f "$LOCAL_FILE" ]; then
  echo "Error: $LOCAL_FILE not found. Run 'yarn get_schedule' first."
  exit 1
fi

echo "Deploying schedule to $SERVER_HOST..."
scp "$LOCAL_FILE" "$SERVER_USER@$SERVER_HOST:$SERVER_PATH"
echo "Schedule deployed successfully!"