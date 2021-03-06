define(function( require ) {

	require( "utils/inflector" );
	require( "initializers/initializers" );


	return require( "ember" ).Application.create({

		// Configuration
		rootElement: document.documentElement,


		// Resolver
		Resolver: require( "Resolver" ),


		// Routing
		Router: require( "Router" ),


		// Store
		ApplicationStore: require( "ember-data" ).Store.extend(),
		ApplicationAdapter: require( "store/TwitchAdapter" ),
		TwitchSerializer: require( "store/TwitchSerializer" ),
		LocalstorageSerializer: require( "ember-data" ).LSSerializer.extend(),


		// Models: localstorage
		Window: require( "models/Window" ),
		WindowAdapter: require( "store/LocalstorageAdapter" ),
		Settings: require( "models/Settings" ),
		SettingsAdapter: require( "store/LocalstorageAdapter" ),
		Versioncheck: require( "models/Versioncheck" ),
		VersioncheckAdapter: require( "store/LocalstorageAdapter" ),
		Search: require( "models/Search" ),
		SearchAdapter: require( "store/LocalstorageAdapter" ),
		Auth: require( "models/Auth" ),
		AuthAdapter: require( "store/LocalstorageAdapter" ),


		// Models: github
		GithubReleases: require( "models/github/Releases" ),
		GithubReleasesAdapter: require( "store/GithubAdapter" ),
		GithubReleasesSerializer: require( "models/github/ReleasesSerializer" ),


		// Models: twitch
		TwitchGame: require( "models/twitch/Game" ),
		TwitchGameSerializer: require( "models/twitch/GameSerializer" ),
		TwitchStream: require( "models/twitch/Stream" ),
		TwitchStreamSerializer: require( "models/twitch/StreamSerializer" ),
		TwitchChannel: require( "models/twitch/Channel" ),
		TwitchChannelSerializer: require( "models/twitch/ChannelSerializer" ),
		TwitchTeam: require( "models/twitch/Team" ),
		TwitchTeamSerializer: require( "models/twitch/TeamSerializer" ),
		TwitchImage: require( "models/twitch/Image" ),
		TwitchImageSerializer: require( "models/twitch/ImageSerializer" ),

		TwitchToken: require( "models/twitch/Token" ),
		TwitchTokenSerializer: require( "models/twitch/TokenSerializer" ),
		TwitchGamesTop: require( "models/twitch/GamesTop" ),
		TwitchGamesTopSerializer: require( "models/twitch/GamesTopSerializer" ),
		TwitchStreamsSummary: require( "models/twitch/StreamsSummary" ),
		TwitchStreamsSummarySerializer: require( "models/twitch/StreamsSummarySerializer" ),
		TwitchStreamsFeatured: require( "models/twitch/StreamsFeatured" ),
		TwitchStreamsFeaturedSerializer: require( "models/twitch/StreamsFeaturedSerializer" ),
		TwitchStreamsFollowed: require( "models/twitch/StreamsFollowed" ),
		TwitchStreamsFollowedSerializer: require( "models/twitch/StreamsFollowedSerializer" ),
		TwitchSearchGame: require( "models/twitch/SearchGame" ),
		TwitchSearchGameSerializer: require( "models/twitch/SearchGameSerializer" ),
		TwitchSearchStream: require( "models/twitch/SearchStream" ),
		TwitchSearchStreamSerializer: require( "models/twitch/SearchStreamSerializer" ),
		TwitchUserFollowsChannel: require( "models/twitch/UserFollowsChannel" ),
		TwitchUserFollowsChannelSerializer: require( "models/twitch/UserFollowsChannelSerializer" ),
		TwitchUserSubscription: require( "models/twitch/UserSubscription" ),
		TwitchUserSubscriptionSerializer: require( "models/twitch/UserSubscriptionSerializer" ),


		// Ember additions/changes/fixes
		LinkView: require( "views/LinkView" ),
		SelectView: require( "views/SelectView" ),


		// Application
		ApplicationRoute: require( "routes/ApplicationRoute" ),
		ApplicationController: require( "controllers/ApplicationController" ),
		ApplicationView: require( "views/ApplicationView" ),

		LoadingRoute: require( "routes/LoadingRoute" ),
		LoadingView: require( "views/LoadingView" ),

		ErrorRoute: require( "routes/ErrorRoute" ),
		ErrorView: require( "views/ErrorView" ),

		IndexRoute: require( "routes/IndexRoute" ),

		ModalView: require( "views/ModalView" ),

		QuitModalTemplate: require( "text!templates/modals/quit.html.hbs" ),

		SearchbarController: require( "controllers/SearchbarController" ),
		SearchbarView: require( "views/SearchbarView" ),

		VersioncheckController: require( "controllers/VersioncheckController" ),
		VersioncheckModalTemplate: require( "text!templates/modals/versioncheck.html.hbs" ),

		LivestreamerController: require( "controllers/LivestreamerController" ),
		LivestreamerModalView: require( "views/LivestreamerModalView" ),
		LivestreamerModalTemplate: require( "text!templates/modals/livestreamer.html.hbs" ),

		NotificationController: require( "controllers/NotificationController" ),


		// Components
		FormButtonComponent: require( "components/FormButtonComponent" ),
		SettingsBarComponent: require( "components/SettingsBarComponent" ),
		ExternalLinkComponent: require( "components/ExternalLinkComponent" ),
		LivestreamerDocsComponent: require( "components/LivestreamerDocsComponent" ),
		RadioButtonComponent: require( "components/RadioButtonComponent" ),
		RadioButtonsComponent: require( "components/RadioButtonsComponent" ),
		GameItemComponent: require( "components/GameItemComponent" ),
		StreamItemComponent: require( "components/StreamItemComponent" ),
		InfiniteScrollComponent: require( "components/InfiniteScrollComponent" ),
		EmbeddedLinksComponent: require( "components/EmbeddedLinksComponent" ),
		FlagIconComponent: require( "components/FlagIconComponent" ),


		// Content
		FeaturedRoute: require( "routes/FeaturedRoute" ),
		FeaturedController: require( "controllers/FeaturedController" ),
		FeaturedView: require( "views/FeaturedView" ),

		WatchingRoute: require( "routes/WatchingRoute" ),
		WatchingController: require( "controllers/WatchingController" ),
		WatchingView: require( "views/WatchingView" ),

		SearchRoute: require( "routes/SearchRoute" ),
		SearchController: require( "controllers/SearchController" ),
		SearchView: require( "views/SearchView" ),

		GamesLoadingRoute: require( "routes/LoadingRoute" ),
		GamesLoadingView: require( "views/LoadingView" ),
		GamesIndexRoute: require( "routes/GamesIndexRoute" ),
		GamesIndexController: require( "controllers/GamesIndexController" ),
		GamesIndexView: require( "views/GamesIndexView" ),
		GamesGameRoute: require( "routes/GamesGameRoute" ),
		GamesGameController: require( "controllers/GamesGameController" ),
		GamesGameView: require( "views/GamesGameView" ),

		ChannelsLoadingRoute: require( "routes/LoadingRoute" ),
		ChannelsLoadingView: require( "views/LoadingView" ),
		ChannelsIndexRoute: require( "routes/ChannelsIndexRoute" ),
		ChannelsIndexController: require( "controllers/ChannelsIndexController" ),
		ChannelsIndexView: require( "views/ChannelsIndexView" ),

		UserLoadingRoute: require( "routes/LoadingRoute" ),
		UserLoadingView: require( "views/LoadingView" ),
		UserIndexRoute: require( "routes/UserIndexRoute" ),
		UserIndexController: require( "controllers/UserIndexController" ),
		UserIndexView: require( "views/UserIndexView" ),
		UserAuthController: require( "controllers/UserAuthController" ),
		UserAuthView: require( "views/UserAuthView" ),
		UserFollowingRoute: require( "routes/UserFollowingRoute" ),
		UserFollowingView: require( "views/UserFollowingView" ),

		SettingsRoute: require( "routes/SettingsRoute" ),
		SettingsController: require( "controllers/SettingsController" ),
		SettingsView: require( "views/SettingsView" ),
		SettingsModalTemplate: require( "text!templates/modals/settings.html.hbs" ),

		AboutView: require( "views/AboutView" ),


		// ready event
		ready: function ready() {
			// make the application window visible
			this.__container__.lookup( "nw:nwWindow" ).show();
		}

	});

});
