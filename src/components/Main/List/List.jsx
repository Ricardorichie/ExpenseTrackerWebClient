import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../../../context/context";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
  ListItemText,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles";

const List = () => {
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);
  // const transactions = [
  //   {
  //     id: 1,
  //     type: "Income",
  //     category: "Salary",
  //     amount: 50,
  //     date: new Date().toDateString(),
  //   },
  //   {
  //     id: 2,
  //     type: "Expense",
  //     category: "Pets",
  //     amount: 50,
  //     date: new Date().toDateString(),
  //   },
  //   {
  //     id: 3,
  //     type: "Income",
  //     category: "Business",
  //     amount: 100,
  //     date: new Date().toDateString(),
  //   },
  // ];
  const classes = useStyles();
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTransaction(transaction.id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
