
 IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'REGISTRAR_RETIRO_CAJERO' AND type = 'P')
                DROP PROCEDURE REGISTRAR_RETIRO_CAJERO
            GO


CREATE PROCEDURE REGISTRAR_RETIRO_CAJERO
@uNoCuenta varchar(5),
@uMonto numeric(10,2)
AS

Begin transaction RBC

	INSERT INTO REALIZAN VALUES(@uNoCuenta,'A',GETDATE(),@uMonto); 
	UPDATE CLIENTES_BANCA SET SALDO = SALDO -500 
	WHERE NoCuenta = @uNoCuenta
	IF @@ERROR = 0 
	COMMIT TRANSACTION RBC 
	ELSE 
	BEGIN 
	PRINT 'A transaction needs to be rolled back' 
	ROLLBACK TRANSACTION RBC 
	END 
	

	
		EXECUTE REGISTRAR_DEPOSITO_VENTANILLA '002',500

		SELECT * FROM CLIENTES_BANCA
	

	
	IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'REGISTRAR_DEPOSITO_VENTANILLA' AND type = 'P')
                DROP PROCEDURE REGISTRAR_DEPOSITO_VENTANILLA
            GO


CREATE PROCEDURE REGISTRAR_DEPOSITO_VENTANILLA
@uNoCuenta varchar(5),
@uMonto numeric(10,2)
AS

Begin transaction RBC

	INSERT INTO REALIZAN VALUES(@uNoCuenta,'B',GETDATE(),@uMonto); 
	UPDATE CLIENTES_BANCA SET SALDO = SALDO +500 
	WHERE NoCuenta = @uNoCuenta
	IF @@ERROR = 0 
	COMMIT TRANSACTION RBC 
	ELSE 
	BEGIN 
	PRINT 'A transaction needs to be rolled back' 
	ROLLBACK TRANSACTION RBC 
	END 
