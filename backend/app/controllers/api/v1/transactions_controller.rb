require 'csv'

class Api::V1::TransactionsController < ApplicationController
  CSV_FILE_PATH = Rails.root.join('data', 'transactions.csv')

  # GET /api/v1/transactions
  def index
    transactions = []

    CSV.foreach(CSV_FILE_PATH, headers: true) do |row|
      transactions << row.to_h
    end

    render json: transactions
  end

  # POST /api/v1/transactions
  def create
    transaction_date = params[:transaction_date]
    account_number = params[:account_number]
    account_holder_name = params[:account_holder_name]
    amount = params[:amount]

    # Randomly assign status
    status = ['Pending', 'Settled', 'Failed'].sample

    # Append new transaction to CSV
    CSV.open(CSV_FILE_PATH, 'a') do |csv|
      csv << [transaction_date, account_number, account_holder_name, amount, status]
    end

    render json: { message: 'Transaction added successfully', status: status }, status: :created
  end
end
