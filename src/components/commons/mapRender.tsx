import React, { memo, useCallback } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { makeStyles } from '@material-ui/core';
import lessInfo from './maps/styles/lessInfo';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    minHeight: 300,
  },
}));
const defaultContainerStyle = {
  width: '100%',
  height: '100vh',
  minWidth: 300,
  minHeight: 300,
};

const DEFAULT_CENTER = {
  lat: 21.026646,
  lng: 105.834127,
};

const defaultStyles = lessInfo;

const DEFAULT_ZOOM = 6;

export const MapContext = React.createContext(null);

function MapRender({
  children,
  center,
  zoom,
  defaultZoom = DEFAULT_ZOOM,
  defaultCenter = DEFAULT_CENTER,
  containerStyle = defaultContainerStyle,
  options,
  ...mapProps
}: ObjKeyValue) {
  const classes = useStyles();
  const [map, setMap] = React.useState<google.maps.Map>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
    if (mapProps.onUnmount) {
      mapProps.onUnmount(map);
    }
  }, []);

  return (
    <div className={classes.root}>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_API_KEY}>
        <GoogleMap
          options={{ styles: defaultStyles, ...options }}
          mapContainerStyle={containerStyle}
          center={center || defaultCenter}
          zoom={zoom || defaultZoom}
          {...mapProps}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <MapContext.Provider value={map}>{children}</MapContext.Provider>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default memo(MapRender);
