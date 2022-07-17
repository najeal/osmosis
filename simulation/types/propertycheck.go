package simulation

import sdk "github.com/cosmos/cosmos-sdk/types"

type SimCallbackFn func(sim *SimCtx, ctx sdk.Context, subResult interface{}) error

type PubSubManager interface {
	Publish(key string, value interface{})
	Subscribe(key string, subName string, callback SimCallbackFn)
}

type PropertyCheck interface {
	// A property check listens for signals on the listed channels, that the simulator can emit.
	// Known channel types right now:
	// * Action execute (with name passed in)
	// * Block end (can make listener execute every Nth block end)
	SubscriptionKeys() []string
	Check(sim *SimCtx, ctx sdk.Context, subResult interface{}) error
}
