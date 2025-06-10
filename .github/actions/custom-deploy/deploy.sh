#!/bin/bash
set -e

ENV=$1
VERSION=$2
NOTIFY=$3

echo "Deploying version $VERSION to $ENV"

DEPLOYMENT_URL="https://$ENV.example.com/app/$VERSION"
DEPLOYMENT_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

echo "deployment-url=$DEPLOYMENT_URL" >> $GITHUB_OUTPUT
echo "deployment-time=$DEPLOYMENT_TIME" >> $GITHUB_OUTPUT

if [ "$NOTIFY" = "true" ]; then
  echo "Sending notification to team..."
fi
