import { Ticket } from "../models/ticket.model.js";

export const ticketsHistory = async (req, res) => {
  try {
    const ticketsGroupedByDay = await Ticket.aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 }, 
      },
    ]);

    res.status(200).send(ticketsGroupedByDay);
  } catch (error) {
    res.status(500).send(error);
  }
};
