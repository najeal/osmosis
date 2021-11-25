(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{479:function(e,t,s){"use strict";s.r(t);var a=s(7),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"token-listings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token-listings"}},[e._v("#")]),e._v(" Token Listings")]),e._v(" "),s("h2",{attrs:{id:"how-to-create-a-new-pool-with-ibc-assets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-a-new-pool-with-ibc-assets"}},[e._v("#")]),e._v(" How to create a new pool with IBC assets")]),e._v(" "),s("p",[e._v("Osmosis is a automated market maker blockchain. This means any IBC-enabled zone can add its token as an asset to be traded on Osmosis AMM completely permissionlessly. Because Osmosis is fundamentally designed as an IBC-native AMM that trades IBC tokens, rather than tokens issued on the Osmosis zone, there are additional nuances to understand and steps to be taken in order to ensure your asset is supported by Osmosis.")]),e._v(" "),s("p",[e._v("This document lays out the prerequisites and the process process that's needed to ensure that your token meets the interchain UX standards set by Osmosis.")]),e._v(" "),s("h3",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),s("ol",[s("li",[e._v("Zone must have IBC token transferred enabled (ICS20 standard).")]),e._v(" "),s("li",[e._v("Assets to be traded should be a fungible "),s("code",[e._v("sdk.Coins")]),e._v(" asset.")]),e._v(" "),s("li",[e._v("Highly reliable, highly available altruistic (as in relay tx fees paid on behalf of user) relayer service.")]),e._v(" "),s("li",[e._v("Highly reliable, highly available, and scalable RPC/REST endpoint infrastructure.")])]),e._v(" "),s("h3",{attrs:{id:"_0-enabling-ibc-transfers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-enabling-ibc-transfers"}},[e._v("#")]),e._v(" 0. Enabling IBC transfers")]),e._v(" "),s("p",[e._v("Because only IBC assets that have been transferred to Osmosis can be traded on Osmosis, the native chain of the asset must have IBC transfers enabled. Cosmos defines the fungible IBC token transfer standard in "),s("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS20"),s("OutboundLink")],1),e._v(" specification.")]),e._v(" "),s("p",[e._v("At this time, only chains using Cosmos-SDK v0.40+ (aka Stargate) can support IBC transfers.")]),e._v(" "),s("p",[e._v("Note that IBC transfers can be enabled via:")]),e._v(" "),s("ol",[s("li",[e._v("as part of a software upgrade, or")]),e._v(" "),s("li",[e._v("a "),s("code",[e._v("ParameterChange")]),e._v(" governance proposal")])]),e._v(" "),s("p",[e._v("To ensure a smooth user experience, Osmosis assumes all tokens will be transferred through a single designated IBC channel between Osmosis and the counterparty zone.")]),e._v(" "),s("p",[e._v("Recommended readings:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.cosmos.network/v0.43/ibc/overview.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC Overview"),s("OutboundLink")],1),e._v(" - To understand IBC clients, connections,")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://docs.cosmos.network/v0.43/ibc/upgrades/quick-guide.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Upgrade IBC Chains and their Clients"),s("OutboundLink")],1)])]),e._v(" "),s("h3",{attrs:{id:"_1-add-your-chain-to-cosmos-chain-registry-and-slip73"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-add-your-chain-to-cosmos-chain-registry-and-slip73"}},[e._v("#")]),e._v(" 1. Add your chain to cosmos/chain-registry and SLIP73")]),e._v(" "),s("h4",{attrs:{id:"cosmos-chain-registry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-chain-registry"}},[e._v("#")]),e._v(" Cosmos Chain Registry")]),e._v(" "),s("p",[e._v("Make a PR to add your chain's entry to the "),s("a",{attrs:{href:"https://github.com/cosmos/chain-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Chain Registry"),s("OutboundLink")],1),e._v(". This allows Osmosis frontend to suggest your chain for asset deposit/withdrawals(IBC transfers).")]),e._v(" "),s("p",[e._v("Make sure to include at least one reliable RPC, gRPC, REST endpoint behind https. Refer to the "),s("a",{attrs:{href:"https://github.com/cosmos/chain-registry/blob/master/osmosis/chain.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("Osmosis entry"),s("OutboundLink")],1),e._v(" as an example.")]),e._v(" "),s("h3",{attrs:{id:"_2-setting-up-and-operating-relayer-to-osmosis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-setting-up-and-operating-relayer-to-osmosis"}},[e._v("#")]),e._v(" 2. Setting up and operating relayer to Osmosis")]),e._v(" "),s("p",[e._v("Relayers are responsible of transferring IBC packets between Osmosis chain and the native chain of an asset. All Osmosis 'deposits' and 'withdrawals' are IBC transfers which dedicated relayers process.")]),e._v(" "),s("p",[e._v("To ensure fungibility amongst IBC assets, the frontend will assume social consensus have been achieved and designate one specific channel between Osmosis and the native chain as the primary channel for all IBC token transfers. Multiple relayers can be active on the same channel, and for the sake of redundancy and increased resilience we recommend having multiple relayers actively relaying packets. It is recommended to initialize the channel as an unordered IBC channel, rather than an ordered IBC channel.")]),e._v(" "),s("p",[e._v("Currently, there are three main Cosmos-SDK IBC relayer implementations:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/cosmos/relayer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go relayer"),s("OutboundLink")],1),e._v(": A Golang implementation of IBC relayer.")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://hermes.informal.systems/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hermes"),s("OutboundLink")],1),e._v(": A Rust implementation of IBC relayer.")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/confio/ts-relayer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ts-relayer"),s("OutboundLink")],1),e._v(": A TypeScript implementation of IBC relayer.")]),e._v(" "),s("li")]),e._v(" "),s("p",[s("strong",[e._v("Note: We are actively investigating issues regarding ts-relayer not working with Osmosis. In the meantime, we recommend using Hermes/Go relayer")])]),e._v(" "),s("p",[e._v("All relayers are compatible with IBC token transfers on the same channel. Each relayer implementation may have different configuration requirements, and have various configuration customizability.")]),e._v(" "),s("p",[e._v("At this time, Osmosis requires that all relayers to pay for the transaction fees for IBC relay transactions, and not the user.")]),e._v(" "),s("p",[e._v("If you prefer not to run your own chain's relayer to Osmosis, there may be various entities ("),s("a",{attrs:{href:"https://cephalopod.equipment/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cephalopod Equipment Corp."),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://www.vitwit.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vitwit"),s("OutboundLink")],1),e._v(", etc) that provide relayers-as-a-service, or you may reach out to various validators in your ecosystem that may be able to operate a relayer. The Osmosis team does "),s("strong",[e._v("not")]),e._v(" provide relayer services for IBC assets.")]),e._v(" "),s("h4",{attrs:{id:"slip73-bech32-prefix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slip73-bech32-prefix"}},[e._v("#")]),e._v(" SLIP73 bech32 prefix")]),e._v(" "),s("p",[e._v("Add your chain's bech32 prefix to the "),s("a",{attrs:{href:"https://github.com/satoshilabs/slips/blob/master/slip-0173.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("SLIP73 repo"),s("OutboundLink")],1),e._v(". The bech32 prefix should be a unix prefix, and only mainnet prefixes should be included.")]),e._v(" "),s("h3",{attrs:{id:"_3-making-a-pr-to-osmosis-assetlists"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-making-a-pr-to-osmosis-assetlists"}},[e._v("#")]),e._v(" 3. Making a PR to Osmosis/assetlists")]),e._v(" "),s("p",[e._v("Due to the permissionless nature of IBC protocol, the same base asset transferred over two different IBC channels will result in two different token denominations.")]),e._v(" "),s("p",[e._v("Example:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("footoken")]),e._v(" transferred to "),s("code",[e._v("barchain")]),e._v(" through "),s("code",[e._v("channel-1")]),e._v(": "),s("code",[e._v("ibc/1b3d5f...")])]),e._v(" "),s("li",[s("code",[e._v("footoken")]),e._v(" transferred to "),s("code",[e._v("barchain")]),e._v(" through "),s("code",[e._v("channel-2")]),e._v(": "),s("code",[e._v("ibc/a2c4e6...")])])]),e._v(" "),s("p",[e._v("In order to reduce user confusion and prevent token non-fungibility, Osmosis frontends are recommended to designate one specific channel as the primary channel for the chain's assets. The Osmosis will only show the IBC token denomination of the designated channel as with the original denomination (i.e. ATOM, AKT, etc).")]),e._v(" "),s("p",[e._v("Therefore, Osmosis uses "),s("a",{attrs:{href:"https://github.com/osmosis-labs/assetlists",target:"_blank",rel:"noopener noreferrer"}},[e._v("Assetlists"),s("OutboundLink")],1),e._v(" as a way to designate and manage token denominations of IBC tokens.")]),e._v(" "),s("p",[e._v("Please create a pull request with the necessary information to allow your token to be shown in its original denomination, rather than as an IBC token denomination.")]),e._v(" "),s("p",[e._v("If you need to verify the base denom of an IBC asset, you can use "),s("code",[e._v("{REST Endpoint Address} /ibc/applications/transfer/v1beta1/denom_traces")]),e._v(" for all IBC denoms or "),s("code",[e._v("{REST Endpoint Address} /ibc/applications/transfer/v1beta1/denom_traces/{hash}")]),e._v(" for one specific IBC denom. (If you need an RPC/REST endpoint for Osmosis, "),s("a",{attrs:{href:"https://datahub.figment.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Figment DataHub"),s("OutboundLink")],1),e._v(" provides a free service for up to 100k requests/day.)")]),e._v(" "),s("h3",{attrs:{id:"_4-creating-a-pool-on-osmosis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-creating-a-pool-on-osmosis"}},[e._v("#")]),e._v(" 4. Creating a pool on Osmosis")]),e._v(" "),s("p",[e._v("Please refer to the "),s("a",{attrs:{href:"https://github.com/osmosis-labs/osmosis/tree/main/x/gamm#create-pool",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("create-pool")]),e._v(" transaction example on the Osmosis repository"),s("OutboundLink")],1),e._v(" on how to create a pool using your IBC tokens.")]),e._v(" "),s("p",[e._v("Recommended are:")]),e._v(" "),s("ul",[s("li",[e._v("50:50 OSMO-Token pool with 0.2% swap fee and 0% exit fee")]),e._v(" "),s("li",[e._v("50:50 ATOM-Token pool with 0.3% swap fee and 0% exit fee")])]),e._v(" "),s("p",[e._v("Guide created by dogemos.")])])}),[],!1,null,null,null);t.default=r.exports}}]);