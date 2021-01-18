import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ income, outcome, total }): Transaction {
    const transactionDate = startOfHour(date); //regra de negocio.. grava de hora em hora

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(appointmentDate,);

    if (findAppointmentInSameDate) {
      throw Error('This appointment is alredy booked!')
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    })

    return appointment;

  }
}
}

export default CreateTransactionService;
