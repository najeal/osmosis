package simulation

import sdk "github.com/cosmos/cosmos-sdk/types"

type Listener interface {
}

type PropertyCheck interface {
	// A property check listens for signals on the listed channels, that the simulator can emit.
	// Known channel types right now:
	// * Action execute (with name passed in)
	// * Block end (can make listener execute every Nth block end)
	Listeners() Listener
	Check(*SimCtx, sdk.Context) error
}
