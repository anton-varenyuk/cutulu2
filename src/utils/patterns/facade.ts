export class DateFacade {
	protected subsystem1: DaysCalculator;
	protected subsystem2: MonthCalculator;
	protected subsystem3: DayOfMonth;

	constructor(subsystem1?: DaysCalculator, subsystem2?: MonthCalculator, subsystem3?: DayOfMonth) {
		this.subsystem1 = subsystem1 || new DaysCalculator();
		this.subsystem2 = subsystem2 || new MonthCalculator();
		this.subsystem3 = subsystem3 || new DayOfMonth();
	}

	public todayIs() {
		const dayOfWeek = this.subsystem1.todayIs();
		const month = this.subsystem2.todayIs();
		const date = this.subsystem3.todayIs();

		return `Today is: ${dayOfWeek}, ${date} of ${month}`;
	}
}

export class DaysCalculator {
	private today: Date;

	constructor() {
		this.today = new Date();
	}

	public todayIs(): string {
		const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return dayNames[this.today.getDay()];
	}
}

export class MonthCalculator {
	private today: Date;

	constructor() {
		this.today = new Date();
	}

	public todayIs(): string {
		const monthNames = [
			'January',
			'February',
			'march',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		return monthNames[this.today.getMonth()];
	}
}

export class DayOfMonth {
	private today: Date;

	constructor() {
		this.today = new Date();
	}

	public todayIs() {
		return this.today.getDate();
	}
}
