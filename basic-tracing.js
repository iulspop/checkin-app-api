const opentelemetry = require('@opentelemetry/sdk-node')
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node')

const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http')

const traceExporter = new OTLPTraceExporter({
  url: 'http://localhost:8080/r/MP6Whwcb',
})

const sdk = new opentelemetry.NodeSDK({
  traceExporter,
  instrumentations: [getNodeAutoInstrumentations()],
})

sdk.start()
