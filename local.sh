# Allow local site to run on any device on local wifi
export IPADDR="$(ipconfig getifaddr en0)"
hugo server --buildDrafts --bind $IPADDR --baseURL http://$IPADDR