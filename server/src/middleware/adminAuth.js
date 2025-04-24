import jwt from "jsonwebtoken";

export const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: "Not authorised,try again!",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Not authorised,try again!",
      });
    }

    next()
  } catch (error) {
    console.log(error);

    re.json({
      success: false,
      message: error.message,
    });
  }
};
