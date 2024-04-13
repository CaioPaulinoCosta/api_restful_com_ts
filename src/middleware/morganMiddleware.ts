import morgan, { StreamOptions } from "morgan";

import config from "config";

import Logger from "../../config/logger";

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

const skip = () => {
  const env = config.get<string>("env") || "development";
  return env !== "development";
};

const morganMiddleware = morgan(
  ":method :url :status :res[content-lenght] - :response-time ms",
  { stream, skip }
);

export default morganMiddleware;
