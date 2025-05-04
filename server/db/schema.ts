import { pgTable, serial, text, varchar, integer, timestamp, pgEnum, foreignKey } from 'drizzle-orm/pg-core';

// User roles enum
export const userRoleEnum = pgEnum('role', ['attendee', 'organizer', 'admin']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }),
  email: varchar('email', { length: 100 }).unique(),
  password: varchar('password', { length: 255 }),
  role: userRoleEnum('role'),
});

export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }),
  description: text('description'),
  startTime: timestamp('start_time'),
  endTime: timestamp('end_time'),
  location: varchar('location', { length: 255 }),
  organizerId: integer('organizer_id').references(() => users.id),
});

export const tickets = pgTable('tickets', {
  id: serial('id').primaryKey(),
  eventId: integer('event_id').references(() => events.id),
  type: varchar('type', { length: 100 }),
  price: integer('price'),
  quantity: integer('quantity'),
});

export const statusEnum = pgEnum('status', ['confirmed', 'cancelled', 'pending']);

export const registrations = pgTable('registrations', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  eventId: integer('event_id').references(() => events.id),
  ticketId: integer('ticket_id').references(() => tickets.id),
  registrationDate: timestamp('registration_date').defaultNow(),
  status: statusEnum('status'),
});

export const schema = { users, events, tickets, registrations };