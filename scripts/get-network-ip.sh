#!/bin/bash

# Get the local network IP address
IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -1)

echo "🌐 VibeSpark is accessible on your network at:"
echo "   http://$IP:3000"
echo ""
echo "📱 Share this URL with others on the same WiFi network to play together!"
echo ""
echo "💡 Make sure your firewall allows connections on port 3000" 