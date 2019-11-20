# sensor-network

Adaptation of tutorial: https://hyperledger.github.io/composer/v0.19/tutorials/developer-tutorial.html to sensors use case

First of all:
service grafana-server stop

Once you start you sould call the script ./startFabric.sh and ./createPeerAdminCard.sh

Then you should install the chaincode in the network (adapt the command to your files):
composer network install --card PeerAdmin@hlfv1 --archiveFile tutorial-network@0.0.1.bna

and start it (adapt the command to your files):
composer network start --networkName tutorial-network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

then follow from this tutorial steps 4.3, 4.4 and 5:
https://hyperledger.github.io/composer/v0.19/tutorials/developer-tutorial 

To make queries, we should filter in this way:
{"where": {"supervisor": "resource:org.example.sensornetwork.Supervisor#SV1"}} 
{"where": {"and" :[{"supervisor": "resource:org.example.sensornetwork.Supervisor#SV1"},{"temp": 20}]}}
