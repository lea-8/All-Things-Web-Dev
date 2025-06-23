import * as vl from 'vega-lite-api';

const carPlot = vl
  .markCircle({ size: 300, opacity: 0.5 })
  .encode(
    vl.x().fieldQ('weight').scale({ zero: false }),
    vl.y().fieldQ('horsepower').scale({ zero: false }),
    vl.color().fieldN('origin'),
    vl.size().fieldQ('mpg'),
    vl.tooltip().fieldN('name')
  );

const tempPlot = vl
  .markArea({ size: 5, opacity: 1 })
  .encode(
    vl.x().fieldT('timestamp'),
    vl.y().fieldQ('temperature'),
    vl.tooltip().fieldN('temperature')
  );

const countryPopPlot = vl
  .markBar()
  .encode(
    vl.x().fieldN('country').sort('-y'),
    vl.y().fieldQ('population'),
    vl.tooltip().fieldN('population')
  );

const countryRelPlot = vl
  .markBar()
  .encode(
    vl.x().fieldN('country').sort('-y'),
    vl.y().fieldQ('population'),
    vl.color().fieldN('religion'),
    vl.tooltip().fieldN('population')
  );

const countryRelPlot2 = vl
  .markCircle()
  .encode(
    vl.x().fieldN('country').sort('-y'),
    vl.y().fieldN('religion'),
    vl.size().fieldQ('population'),
    vl.tooltip().fieldN('population')
  );

const peoplePlot = vl
  .markBar()
  .encode(
    vl.x().fieldN('gender'),
    vl.y().fieldQ('gender').count(),
    vl.color().fieldN('name'),
    vl.tooltip().fieldN('name')
  )

export const viz = peoplePlot;